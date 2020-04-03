// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
    "ajax": {
      "url": "http://157.245.202.61:7500/api/v1/posts/comment",
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
