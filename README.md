# htll-moedict
convert moedict to htll format

## generate moedict.htl

   node gen.js
   
## create pitaka files from moedict.htl

   node build.js

## make accessible from UI  (Windows)

   cd public     //public web folder
   mklink /j  moedict ..\htll-moedict\moedict   //add a junction 