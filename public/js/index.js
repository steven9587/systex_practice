$(document).ready(function() {
    var cors = 'https://cors-anywhere.herokuapp.com/';
    var apiUrl = 'https://publicart.taipei/service/artgetdata.ashx';
    $.ajax({
        url: `${cors}${apiUrl}`,
        method: 'GET',
        dataType: 'json',
        data: '',
        async: true,
        success: res => {
            console.log(res);
            $('#example').DataTable({    
                "data": res,
                "columns": [ 
                    { data: "序號", title: "編號" },
                    { data: "作品名稱", title: "作品名稱"},
                    { data: "作者", title: "作者" },
                    { data: "行政區", title: "行政區" },
                    { data: "設置完成年度", title: "設置年度" },
                ],
          })
        },
        error: err =>{
            console.log(err)
        },
    });
    
});

// var cors = 'https://cors-anywhere.herokuapp.com/';
// var apiUrl = 'https://publicart.taipei/service/artgetdata.ashx';
// $.ajax({
//     url: `${cors}${apiUrl}`,
//     method: 'GET',
//     dataType: 'json',
//     data: '',
//     async: true,
//     headers: {
//         "x-requested-with": "xhr" 
//     },　
//     success: res => {
//         console.log(res)
//         let appendHtml = ``;
//         res.forEach(element => {
//             appendHtml += `
//                 <tr>
//                     <th class="col-1">` + element.序號 + `</th>
//                     <td class="col-5">` + element.作品名稱 + `</td>
//                     <td class="col-2">` + element.作者 + `</td>
//                     <td class="col-2">` + element.行政區 + `</td>
//                     <td class="col-2">` + element.設置完成年度 + `</td>
//                 </tr>`;
//         });
//         $("#tableContent").append(appendHtml);
//     },
//     error: err =>{
//         console.log(err)
//     },
// });