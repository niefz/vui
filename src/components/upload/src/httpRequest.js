import axios from 'axios';

const instance = axios.create();

const upload = (option) => {
  const config = {};
  const formData = new FormData();

  if (option.data) {
    Object.keys(option.data).forEach(key => formData.append(key, option.data[key]));
  }

  formData.append(option.filename, option.file, option.file.name);

  config.onUploadProgress = (e) => {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    option.onProgress(e);
  };

  config.headers = option.headers || {};

  if (option.withCredentials) {
    config.withCredentials = true;
  }

  return instance.post(option.action, formData, config)
    .then((response) => {
      if (response.status < 200 || response.status >= 300) {
        return option.onError(response.data);
      }
      option.onSuccess(response.data);
    })
    .catch((error) => {
      option.onError(error);
    });
};

export default upload;
