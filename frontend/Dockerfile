#FROM nginx:latest

FROM nginxinc/nginx-unprivileged

# Copy the HTML file
COPY index.html /usr/share/nginx/html

# Copy the rest of the files
# COPY . .

# Expose the port
EXPOSE 80

# Run the app
CMD ["nginx", "-g", "daemon off;"]
