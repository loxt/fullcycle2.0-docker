
FROM golang:1.17.5-alpine3.15 as builder

RUN mkdir -p /app
WORKDIR /app

COPY go.mod .

ENV GOPROXY https://proxy.golang.org,direct

RUN go mod download

COPY . .

ENV CGO_ENABLED=0

RUN GOOS=linux go build ./main.go

FROM scratch

WORKDIR /app

COPY --from=builder /app/main .

CMD ["/app/main"]
