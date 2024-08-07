# Hướng dẫn clone, run project

## 1. Thiết lập Backend (Java Spring Boot)

1. **Cài đặt Java và Maven**

2. **Cài đặt Dependency**: Di chuyển vào thư mục `backend` và cài đặt các dependency:

    ```bash
    cd path/to/book-store/backend
    mvn install
    ```

3. **Chạy Ứng Dụng**: Chạy ứng dụng Spring Boot:

    ```bash
    mvn spring-boot:run
    ```

## 2. Thiết lập Frontend (React)

1. **Cài đặt Node.js và npm**

2. **Cài đặt Dependency**: Di chuyển vào thư mục `frontend` và cài đặt các dependency:

    ```bash
    cd path/to/book-store/frontend
    npm install
    ```

3. **Chạy Ứng Dụng**: Khởi động ứng dụng React:

    ```bash
    npm start
    ```

## 3. Thiết lập Cơ Sở Dữ Liệu

1. **Tạo Cơ Sở Dữ Liệu**:
    ```sql
    CREATE DATABASE mybookstore
    ```
    Sau đó sử dụng file `.sql` có trong thư mục `db` để nạp dữ liệu mẫu
    ```bash
    mysql -u root -p mybookstore < path/to/book-store/db/output_file.sql
    ```

2. **Cấu hình Cơ Sở Dữ Liệu**: Đảm bảo rằng cấu hình kết nối đến cơ sở dữ liệu trong ứng dụng backend đã được thiết lập chính xác (xem trong file cấu hình `application.properties`).

## 4. Cập Nhật Các Biến Môi Trường
