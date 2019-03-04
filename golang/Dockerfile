FROM golang:latest
WORKDIR /go/src/github.com/justin2997/Knative-Build-GitHub-Exemple/
COPY . .
RUN CGO_ENABLED=0 go build -v -o app

FROM scratch
COPY --from=0 /go/src/github.com/justin2997/Knative-Build-GitHub-Exemple/app .
ENTRYPOINT ["/app"]