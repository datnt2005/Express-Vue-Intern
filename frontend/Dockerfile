# Sử dụng Node.js base image
FROM node:20-alpine

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy file khai báo dependencies
COPY package*.json ./

# Xoá node_modules và package-lock.json (fix lỗi rollup-linux-x64-gnu)
RUN rm -rf node_modules package-lock.json

# Cài lại dependencies sạch sẽ
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Mở cổng mặc định của Vite (5173)
EXPOSE 5173

# Lệnh chạy Vite Dev Server
CMD ["npm", "run", "dev", "--", "--host"]
