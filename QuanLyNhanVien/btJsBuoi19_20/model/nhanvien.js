//tao lop doi tuong nhan vien
function NhanVien(_taiKhoan,_hoTen,_email,_matKhau,_ngayLam,_luongCoBan,_chucVu,_gioLam){
    //3.  property
    this.taiKhoan = _taiKhoan;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCoBan = _luongCoBan;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.tongLuong = 0;
    this.loaiNhanVien = "";
    
    //method
    //5.  tong luong
    this.tongLuong = function(){
        if(this.chucVu === "Sếp"){
            this.tongLuong = this.luongCoBan * 3;
        }else if(this.chucVu === "Trưởng phòng"){
            this.tongLuong = this.luongCoBan *2;
        }else if(this.chucVu === "Nhân viên"){
            this.tongLuong = this.luongCoBan *1;
        };
    };
    //6.   xep loai
    this.loaiNhanVien = function(){
        if(this.gioLam >= 192){
            this.loaiNhanVien = "Nhân viên xuất sắc";
        }else if(this.gioLam >= 176){
            this.loaiNhanVien = "Nhân viên giỏi";
        }else if(this.gioLam >= 160){
            this.loaiNhanVien = "Nhân viên khá";
        }else{
            this.loaiNhanVien = "Nhân viên trung bình"
        };
    };
};