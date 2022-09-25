//tao mang chua danh sach nhan vien
var dsnv = new DSNV();
//tao validation
var validation = new Validation();
//hien thi dsnv.arr
getLocalStorage()
//dom id
function domID(id){return document.getElementById(id)};
//xoa loi
function xoaLoi(){
    domID("tbTKNV").style = "display:none";
    domID("tbTen").style = "display:none";
    domID("tbEmail").style = "display:none";
    domID("tbMatKhau").style = "display:none";
    domID("tbNgay").style = "display:none";
    domID("tbLuongCB").style = "display:none";
    domID("tbChucVu").style = "display:none";
    domID("tbGiolam").style = "display:none";
}

//lay thong tin nhan vien
function layThongTinNhanVien(isAdd){
    var taiKhoan = domID("tknv").value;
    var hoTen = domID("name").value;
    var email = domID("email").value;
    var matKhau = domID("password").value;
    var ngayLam = domID("datepicker").value;
    var luongCoBan = domID("luongCB").value;
    var chucVu = domID("chucvu").value;
    var gioLam = domID("gioLam").value;

    //flag(boolean:true/false)
    var isValid = true;
    if(isAdd){
//check validation:
    //taiKhoan
    isValid &= validation.kiemTraRong(taiKhoan,"tbTKNV","(*)Vui lòng nhập tài khoản") && validation.kiemTraTKNV(taiKhoan,"tbTKNV","(*)tối đa từ 4 đến 6 ký số",4,6) && validation.kiemTraTkTrung(taiKhoan,"tbTKNV","(*)Tài khoản đã tồn tại",dsnv.arr);
    };
    //hoTen
    isValid &= validation.kiemTraRong(hoTen,"tbTen","(*)Vui lòng nhập họ và tên") && validation.kiemTraChuoiKiTu(hoTen,"tbTen","(*)Chỉ được nhập chữ");

    //email
    isValid &= validation.kiemTraRong(email,"tbEmail","(*)Vui lòng nhập email") && validation.kiemTraEmail(email,"tbEmail","(*)email không đúng dịnh dạng");

    //matKhau
    isValid &= validation.kiemTraRong(matKhau,"tbMatKhau","(*)Vui lòng nhập mật khẩu") && validation.kiemTraMatKhau(matKhau,"tbMatKhau","(*)Mật khẩu 6-10 ký tự(chứa ít nhất 1 ký tự số,1 ký tự in hoa,1 ký tự đặc biệt)");

    //ngayLam
    isValid &= validation.kiemTraRong(ngayLam,"tbNgay","(*)Vui lòng nhập ngày làm") && validation.kiemTraNgayLam(ngayLam,"tbNgay","(*)Vui lòng nhập đúng định dạng(dd/mm/yyyy)")

    //luongCoBan
    isValid &= validation.kiemTraRong(luongCoBan,"tbLuongCB","(*)Vui lòng nhập lương cơ bản") && validation.kiemTraSo(luongCoBan,"tbLuongCB","(*)Chỉ nhập được số") && validation.kiemTraGioiHang(luongCoBan,"tbLuongCB","(*)lương cơ bản nhập từ 1000000 -20000000",1000000,20000000);

    //chucVu
    isValid &= validation.kiemTraChucVu("chucvu","tbChucVu","(*)Vui lòng chọn chức vụ");

    //gioLam
    isValid &= validation.kiemTraRong(gioLam,"tbGiolam","(*)Vui lòng nhập giờ làm") && validation.kiemTraSo(gioLam,"tbGiolam","(*)chỉ được nhập số") && validation.kiemTraGioiHang(gioLam,"tbGiolam","(*)giờ làm nhập từ 80 - 200",80,200) ;
    
    


    if(isValid){
    //tao nv moi tu NhanVien
    var nv = new NhanVien(taiKhoan,hoTen,email,matKhau,ngayLam,luongCoBan,chucVu,gioLam);
    //tinh tong luong va xep loai nhan vien
    nv.tongLuong();
    nv.loaiNhanVien();
    return nv;
    };
    return null;
    
};
//bo cap nhat vi chi dung them nv
//bo disabled tk
//reset trong lai
domID("btnThem").addEventListener("click",function(){
    domID("btnCapNhat").style = "display:none";
    domID("btnThemNV").style = "display:block";
    domID("tknv").disabled = false;
    domID("tknv").value="";
    domID("name").value="";
    domID("email").value="";
    domID("password").value="";
    domID("datepicker").value="";
    domID("luongCB").value="";
    domID("chucvu").value=domID("chonCV").value;
    domID("gioLam").value="";
    xoaLoi();
    
});

domID("btnThemNV").addEventListener("click",function(){
    var nv = layThongTinNhanVien(true);
    if(nv){
        //2. them nv
        dsnv.themNV(nv);
        //1. render table
        rendertable(dsnv.arr);
        //luu data
        setLocalStorage();
        
    };
});
//1.in ra table thong tin nv
function rendertable(data){
    var content = "";

    data.forEach(function(nv){
        content +=`
        <tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.loaiNhanVien}</td>
        <td>
        <button class="btn btn-info" onclick="editSV('${nv.taiKhoan}')">Edit</button>
        <button class="btn btn-danger" onclick="deleteNV('${nv.taiKhoan}')">Delete</button>
        </td>
        </tr>
        `;
    });
    domID("tableDanhSach").innerHTML = content;
};
//7.  xoa nv
function deleteNV(taiKhoan){
    dsnv.xoaNV(taiKhoan);
    rendertable(dsnv.arr);
    setLocalStorage();
};
//8. edit va update 
function editSV(taiKhoan){
    //mo cap nhat sinh vien ko hien thi lai loi 
    domID("btnCapNhat").style = "display:block";
    domID("btnThemNV").style = "display:none";
    xoaLoi();
    var nv = dsnv.layThongTinChiTietNV(taiKhoan);
// console.log(nv);
    if(nv){
        //hien thi bang
        document.querySelector("body").className = "modal-open";
        document.querySelector("body").style = "padding-right: 17px;"
        domID("myModal").style="display: block; padding-right: 17px;";
        domID("myModal").className = "modal fade show";
        //dong bang
        domID("btnDong").onclick = function(){
        document.querySelector("body").className = "";
        document.querySelector("body").style = ""
        domID("myModal").style="display: none";
        domID("myModal").className = "modal fade";
        };
        //Dom toi cac the input,show thong tin sv
        domID("tknv").value = nv.taiKhoan;
        //disable the input#txtMaSV
        domID("tknv").disabled = true;
        domID("name").value = nv.hoTen;
        domID("email").value = nv.email;
        domID("password").value = nv.matKhau;
        domID("datepicker").value = nv.ngayLam;
        domID("chucvu").value = nv.chucVu;
        domID("gioLam").value = nv.gioLam;
        domID("luongCB").value = nv.luongCoBan;
    };
    //cap nhat nv
    domID("btnCapNhat").addEventListener("click",function(){
        var nv = layThongTinNhanVien(false);

    
    if(nv){
        dsnv.capNhatNV(nv);
        rendertable(dsnv.arr);
        setLocalStorage();
        
        //cap nhat xong se dong bang
        document.querySelector("body").className = "";
        document.querySelector("body").style = ""
        domID("myModal").style="display: none";
        domID("myModal").className = "modal fade";
    };
        

    });
};
//.9 Tim nhan vien theo loainv
domID("btnTimNV").style="cursor: pointer;"
domID("searchName").addEventListener("keyup",function(){
    //lay keyword
    var keyword = domID("searchName").value;
    //dem keyword tim kiem
    var mangTimKiem = dsnv.timKiemNV(keyword);
    //hien thi danh sach tim kiem
    rendertable(mangTimKiem);

});



//luu tren local
function setLocalStorage(){
    //chuyen arr từ JSon => String
    var dataString= JSON.stringify(dsnv.arr);
    //luu xuong localstorage cua trinh duyet
    localStorage.setItem("DSNV",dataString); 
};

function getLocalStorage(){
    if(localStorage.getItem("DSNV")){
        var dataString= localStorage.getItem("DSNV");
        //string => json
        dsnv.arr = JSON.parse(dataString);
        rendertable(dsnv.arr);
    };
};