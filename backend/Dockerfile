FROM python:3.13.3-alpine
EXPOSE 5000
WORKDIR /app
COPY requirements.txt .
RUN \
 apk add --no-cache postgresql-libs && \
 apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
 python3 -m pip install -r requirements.txt --no-cache-dir && \
 apk --purge del .build-deps
COPY . .
ENV APP_ENV=prod
CMD ["gunicorn", "-b", "0.0.0.0:5000", "app:app"]