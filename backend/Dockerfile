## For debian distros. For RHEL change apt-get to yum

FROM python:3.8-slim
#FROM registry.access.redhat.com/ubi8/python-38

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    python3-dev \
    libpq-dev

# Copy the requirements.txt file
COPY requirements.txt .

# Install the requirements
RUN pip install -r requirements.txt

# Copy the rest of the files
COPY replace.py .

# Run a script 
RUN python3 replace.py

# Fixing permission denied error that occurs in openshift because no container runs as root
# https://stackoverflow.com/questions/42363105/permission-denied-mkdir-in-container-on-openshift
#RUN adduser node
#RUN adduser node root


# Set the working directory
WORKDIR /app

# Copy the rest of the files
COPY app.py .

# Fixing permission denied error that occurs in openshift because no container runs as root
#RUN chmod -R 777 /app
#RUN chown -R node:root /app

RUN chgrp -R 0 /app && chmod -R g=u /app

# Expose the port
EXPOSE 5000

#USER node

# Run the app
CMD ["python3", "app.py"]