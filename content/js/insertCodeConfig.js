// 换行符
const lineBreak = '\n';
const twoLineBreak = lineBreak.repeat(2);

// 插入的代码串配置表
const insertCodeConfig = {
  'variable-global': `a = 1${lineBreak}`,
  'variable-local': `local a = 1${lineBreak}`,
  'func-global': `function a()${twoLineBreak}end${lineBreak}`,
  'func-local': `local function a()${twoLineBreak}end${lineBreak}`,
  'assert-if': `if true then${twoLineBreak}else${twoLineBreak}end${lineBreak}`,
  'assert-ifelse': `if true then${twoLineBreak}end${lineBreak}`,
  'assert-ifelseif': `if true then${twoLineBreak}elseif true then${twoLineBreak}else${twoLineBreak}end${lineBreak}`,
  'loop-for': `for i=0, 10 do${twoLineBreak}end${lineBreak}`,
  'loop-while': `val=0${twoLineBreak}while val<5 do${twoLineBreak}val=val+1${twoLineBreak}end${lineBreak}`,
  'loop-repeatUntil': `val=0${twoLineBreak}repeat${twoLineBreak}val=val+1${twoLineBreak}until(val>5)${lineBreak}`,
  'table-global': `a = {}${lineBreak}`,
  'table-local': `local a = {}${lineBreak}`,
};

window.insertCodeConfig = insertCodeConfig;
function showModal() {
  // Thêm class "show" vào modal
  $('#portfolioModal1').addClass('show');
  
  // Thêm class "modal-open" vào thẻ body
  $('body').addClass('modal-open');
  
  // Hiển thị modal
  $('#portfolioModal1').modal('show');
}
var submitButton = document.querySelector(".go");
var debai=`Cho một chuỗi s đại diện cho biểu thức, hãy tính giá trị của biểu thức này và trả về kết quả.
Chuỗi s có thể chứa dấu cách.
Lưu ý: Bạn không được phép sử dụng bất kỳ hàm tính toán nào được tích hợp sẵn trong ngôn ngữ để tính giá trị biểu thức dưới dạng chuỗi, chẳng hạn như loadstring(), v..v..`
var VD1=`
<p style="font-size:12px;"><b>INPUT: </b>s = "3+2*2"</p><p style="font-size:12px;"><b>OUTPUT: </b>7</p>
`
var VD2=`
<p style="font-size:12px;"><b>INPUT: </b>s = " 3+   5 / 2 "</p><p style="font-size:12px;"><b>OUTPUT: </b>5</p>
`
submitButton.addEventListener("click", function() {
  showModal();
});

var viewgo = document.querySelector(".viewgo");

viewgo.addEventListener("click", function() {
  let fb=sessionStorage.getItem("facebook")
  let mail=sessionStorage.getItem("email")
    Swal.fire(`Facebook: ${fb}
    Email: ${mail}`);
});

gapi.load('client:auth2', function() {
  gapi.client.init({
    apiKey: 'AIzaSyCK0VZylnTrhR7xAMsZ-72VYeXVlqMu5JI',
    clientId: '851270111968-m5t3bkeidfaj82horub888m49ddvirui.apps.googleusercontent.com',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
    scope: 'https://www.googleapis.com/auth/drive.file'
  }).then(function() {
    gapi.auth2.getAuthInstance().signIn();
  });
});

function uploadFile() {
  var fileContent = 'Hello, world!';
  var file = new Blob([fileContent], {type: 'text/plain'});
  var metadata = {
    name: 'hello.txt',
    mimeType: 'text/plain'
  };
  var accessToken = gapi.auth.getToken().access_token;
  var form = new FormData();
  form.append('metadata', new Blob([JSON.stringify(metadata)], {type: 'application/json'}));
  form.append('file', file);
  fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + accessToken
    },
    body: form
  }).then(function(response) {
    console.log(response);
  });
}