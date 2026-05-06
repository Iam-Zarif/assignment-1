#any vs unknown type

### any = type safety hole
- using `any` basically turns off TypeScript checking  
- you can do anything with it - no errors at compile time  
- sounds flexible, but bugs show up later at runtime  
- feels like writing plain JavaScript inside TS - that’s why lint complains  

### unknown = safer
- still means I don’t know the type yet  
- but you can’t use it directly like `any`  
- you have to check the type first  
- so it forces safer handling before doing anything 