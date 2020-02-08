ng build --prod --configuration=$1 --build-optimizer false --output-hashing all && gzipper -v ./dist
ng build --prod --configuration=production --build-optimizer false --output-hashing all && gzipper -v ./dist
