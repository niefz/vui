<template>
  <div class="v-picker-date">
    <div class="v-picker-date--hd">
      <v-button
        class="v-picker-date--prev-btn"
        type="text">
      </v-button>
      <span class="v-picker-date--hd-label" role="button">2018 年</span>
      <span class="v-picker-date--hd-label" role="button">1 月</span>
      <v-button
        class="v-picker-date--next-btn"
        type="text">
      </v-button>
    </div>
    <div class="v-picker-date--bd">
      <table class="v-picker-date--table" cellspacing="0" cellpadding="0" role="grid">
        <thead class="v-picker-date--table-thead">
          <tr role="row">
            <th role="columnheader">
              <div class="v-picker-date--table-header">
                <span class="v-picker-date--table-header-inner">日</span>
              </div>
            </th>
            <th role="columnheader">
              <div class="v-picker-date--table-header">
                <span class="v-picker-date--table-header-inner">一</span>
              </div>
            </th>
            <th role="columnheader">
              <div class="v-picker-date--table-header">
                <span class="v-picker-date--table-header-inner">二</span>
              </div>
            </th>
            <th role="columnheader">
              <div class="v-picker-date--table-header">
                <span class="v-picker-date--table-header-inner">三</span>
              </div>
            </th>
            <th role="columnheader">
              <div class="v-picker-date--table-header">
                <span class="v-picker-date--table-header-inner">四</span>
              </div>
            </th>
            <th role="columnheader">
              <div class="v-picker-date--table-header">
                <span class="v-picker-date--table-header-inner">五</span>
              </div>
            </th>
            <th role="columnheader">
              <div class="v-picker-date--table-header">
                <span class="v-picker-date--table-header-inner">六</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody class="v-picker-date--table-tbody">
          <tr role="row">
            <td role="gridcell">
              <div class="v-picker-date--table-cell">
                <span class="v-picker-date--table-cell-inner last-month-cell disabled">31</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell">
                <span class="v-picker-date--table-cell-inner">1</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range start-date">
                <span class="v-picker-date--table-cell-inner">2</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">3</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">4</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">5</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">6</span>
              </div>
            </td>
          </tr>
          <tr role="row">
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">7</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">8</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">9</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">10</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">11</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">12</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">13</span>
              </div>
            </td>
          </tr>
          <tr role="row">
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">14</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">15</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">16</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">17</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">18</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">19</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">20</span>
              </div>
            </td>
          </tr>
          <tr role="row">
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">21</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">22</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">23</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">24</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">25</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner today">26</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">27</span>
              </div>
            </td>
          </tr>
          <tr role="row">
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">28</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range">
                <span class="v-picker-date--table-cell-inner">29</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell in-range end-date">
                <span class="v-picker-date--table-cell-inner">30</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell">
                <span class="v-picker-date--table-cell-inner">31</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell">
                <span class="v-picker-date--table-cell-inner next-month-cell">1</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell">
                <span class="v-picker-date--table-cell-inner next-month-cell">2</span>
              </div>
            </td>
            <td role="gridcell">
              <div class="v-picker-date--table-cell">
                <span class="v-picker-date--table-cell-inner next-month-cell">3</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  import Button from 'free-vui/src/components/button';

  export default {
    name: 'DatePicker',
    componentName: 'DatePicker',
    components: {
      VButton: Button,
    },
  };
</script>
