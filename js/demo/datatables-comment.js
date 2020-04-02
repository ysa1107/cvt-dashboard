// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
    "ajax": {
      "url": "http://localhost:7500/api/v1/posts/comment",
      "type": "GET",
    },
    columns :[
      { data : 'name'},
      { data : 'message'},
      { data : 'date_created'}
    ],
    paging: false,
    ordering: false
  });
});
