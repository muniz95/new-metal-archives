<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Type</th>
          <th>Name</th>
          <th>Category</th>
          <th>Reported by</th>
          <th>Date</th>
          <th>Last update</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="report in reports" :key="report.id">
          <td>+</td>
          <td>{{report.type}}</td>
          <td>{{report.name}}</td>
          <td>{{report.category}}</td>
          <td>{{report.reportedBy}}</td>
          <td>{{report.date}}</td>
          <td>{{report.lastUpdate}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      reports: [
        {
          id: 1,
          type: 'Label',
          name: 'The Satan Records',
          category: 'Should be removed',
          reportedBy: 'Diplomate',
          date: '2019-07-25 18:01',
          lastUpdate: '2019-07-27 13:00'
        },
        {
          id: 2,
          type: 'Album',
          name: 'Söhne des Teufels',
          category: 'General update / mistakes',
          reportedBy: 'Zodijackyl',
          date: '2019-08-10 21:32',
          lastUpdate: '2019-08-27 22:42'
        },
        {
          id: 3,
          type: 'Band',
          name: 'Death Before Dishonor',
          category: 'Wrong music genre',
          reportedBy: 'Witcher',
          date: '2019-08-12 19:57',
          lastUpdate: '2019-08-12 19:57'
        },
        {
          id: 4,
          type: 'Artist',
          name: 'Sacrilegious Sinner',
          category: 'Duplicate entry',
          reportedBy: '0th',
          date: '2019-08-17 08:36',
          lastUpdate: '2019-08-22 08:19'
        },
        {
          id: 5,
          type: 'Artist',
          name: 'Finn Arne',
          category: 'Duplicate entry',
          reportedBy: 'LordOfAngmar',
          date: '2019-08-28 08:03',
          lastUpdate: '2019-08-28 08:03'
        },
        {
          id: 6,
          type: 'Artist',
          name: 'Luis E. Garrido A',
          category: 'General update / mistakes',
          reportedBy: 'euronymous666black',
          date: '2019-08-28 08:57',
          lastUpdate: '2019-08-28 08:57'
        },
        {
          id: 7,
          type: 'Artist',
          name: 'Emidio Ramos',
          category: 'Should be removed',
          reportedBy: 'Visitor',
          date: '2019-08-28 09:06',
          lastUpdate: '2019-08-28 09:06'
        },
        {
          id: 8,
          type: 'Artist',
          name: 'T',
          category: 'Duplicate entry',
          reportedBy: '0th',
          date: '2019-08-28 09:08',
          lastUpdate: '2019-08-28 10:57'
        },
        {
          id: 9,
          type: 'Band',
          name: 'Thragedium',
          category: 'Suggestion of better image',
          reportedBy: 'bmgnsantos',
          date: '2019-08-28 11:19',
          lastUpdate: '2019-08-28 11:35'
        },
        {
          id: 10,
          type: 'Artist',
          name: 'Hack',
          category: 'Duplicate entry',
          reportedBy: 'Visitor',
          date: '2019-08-28 11:21',
          lastUpdate: '2019-08-28 11:21'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/index.scss';
  th {
    text-align: left;
    color: $link-color;
  }
</style>
