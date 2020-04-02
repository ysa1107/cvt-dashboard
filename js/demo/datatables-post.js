// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
    "ajax": {
      "url": "http://localhost:7500/api/v1/posts/feed",
      "type": "GET",
    },
    columns :[
      { data : 'id'},
      { data : 'image'},
      { data : 'message'},
      { data : 'username'},
      { data : 'total_like'}
    ]
  });
});
