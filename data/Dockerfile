FROM python:3.11-alpine3.18
WORKDIR /app
COPY ./requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
CMD [ "python", "./src" ]