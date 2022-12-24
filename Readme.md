# FOR BACK END
### Create image from ContainerFile
```sh
podman build backend/ -t quay.io/arslankhanali/objectdetection-backend 
```
### Issues 1

Traceback (most recent call last):
  File "/Users/arslankhan/Projects:Codes/Openshift-objectDetection/Backend(python)/app.py", line 157, in <module>
    category_index = label_map_util.create_category_index_from_labelmap(PATH_TO_LABELS,
  File "/usr/local/lib/python3.10/site-packages/object_detection/utils/label_map_util.py", line 229, in create_category_index_from_labelmap
    categories = create_categories_from_labelmap(label_map_path, use_display_name)
  File "/usr/local/lib/python3.10/site-packages/object_detection/utils/label_map_util.py", line 209, in create_categories_from_labelmap
    label_map = load_labelmap(label_map_path)
  File "/usr/local/lib/python3.10/site-packages/object_detection/utils/label_map_util.py", line 132, in load_labelmap
    with tf.gfile.GFile(path, 'r') as fid:
AttributeError: module 'tensorflow' has no attribute 'gfile'. Did you mean: 'fill'?

### Solution to 1: Fix above problem. I have placed this script in replace.py. I run it via Containerfile
with open("/usr/local/lib/python3.10/site-packages/object_detection/utils/label_map_util.py") as r:
  text = r.read().replace("tf.gfile.GFile", "tf.io.gfile.GFile")
with open("/usr/local/lib/python3.10/site-packages/object_detection/utils/label_map_util.py", "w") as w:
  w.write(text)


###  Issue 2: Permission Denied error in Openshift logs
On openshift containers dont run as root so wrx of files gives permission denied error. fixed by adding a new user node and giving it permissions. All done in containerfile


### Note: expose route and then copy paste just the address when giving url to front end app
Don't append port number or /upload-image  
e.g. https://objectdetection-backend.example.com/

# FOR FRONT END 
### Create image from ContainerFile
```sh
podman build frontend/ -t quay.io/arslankhanali/objectdetection-frontend
```
### 
On openshift create route with port 8080 instead of 80


## Containers are available at 
https://quay.io/repository/arslankhanali/objectdetection-frontend
https://quay.io/repository/arslankhanali/objectdetection-backend