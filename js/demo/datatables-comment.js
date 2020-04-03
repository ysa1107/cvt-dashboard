// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
    "ajax": {
      "url": "https://bot.chuviettay.com/api/v1/posts/comment",
      "type": "GET",
    },
    columns :[
      { data : 'avatar'},
      { data : 'name'},
      { data : 'message'},
      { data : 'date_created'}
    ],
    paging: false,
    ordering: false
  });
});
