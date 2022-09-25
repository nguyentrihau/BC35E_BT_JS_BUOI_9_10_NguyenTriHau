//tao danh sach nv
function DSNV() {
    this.arr = [];
    this.themNV = function (nv) {
        this.arr.push(nv);
    };
    //tim vi tri nv
    this.timViTriNV = function (taiKhoan) {
        var index = -1;
        this.arr.forEach(function (nv, i) {
            if (nv.taiKhoan === taiKhoan) {
                index = i;
            };
        });
        return index;
    };
    //7.  xoa nv
    this.xoaNV = function (taiKhoan) {
        var index = this.timViTriNV(taiKhoan);
        if (index !== -1) {
            this.arr.splice(index, 1);
        };
    };
    //lay thong tin nv can tim ra lai
    this.layThongTinChiTietNV = function(taiKhoan){
        var index = this.timViTriNV(taiKhoan);
        if(index !== -1){
            return this.arr[index];
        };
        return null;
    };
    //cap nhat lai thong tin nv
    this.capNhatNV = function(nv){
        var index = this.timViTriNV(nv.taiKhoan);
        if(index !== -1){
            this.arr[index]= nv;
        };
    };
    // tim nv bang keyword
    this.timKiemNV = function(keyword){
        /**
         * 0. Tao mangTimKiem = [];
         * 1. Duyet mang this.arr
         * 2. Neu nv.loaiNhanVien so sanh trung keyword?
         *  => True => Them sv vo mangTimKiem
         * 3. tra ve mangTimKiem
         */
        var mangTimKiem = [];
        this.arr.forEach(function(nv){
            //chuyen string thanh chu thuong
            var loaiNhanVien = nv.loaiNhanVien.toLowerCase();
            var searchLoai = keyword.toLowerCase();
            if(xoa_dau(loaiNhanVien).indexOf(searchLoai) !== -1){
                mangTimKiem.push(nv);
            };
            if(loaiNhanVien.indexOf(searchLoai) !== -1){
                mangTimKiem.push(nv);
            };
        });
        
        return mangTimKiem;
    };
    // let newNhanviens = nhanViens.filter((nhanVien) => {let xepLoai = nhanVien.rank().toLowerCase();
    //     return xepLoai.includes(searchName);
    //    });
    //     display(newNhanviens);
       
    
};
//xoa dau tieng viet
function xoa_dau(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}
