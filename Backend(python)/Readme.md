## Create image from ContainerFile

podman build . -t quay.io/arslankhanali/objectdetection-backend 

podman build . -t quay.io/arslankhanali/objectdetection-frontend 
##

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


## Fix above problem
with open("/usr/local/lib/python3.10/site-packages/object_detection/utils/label_map_util.py") as r:
  text = r.read().replace("tf.gfile.GFile", "tf.io.gfile.GFile")
with open("/usr/local/lib/python3.10/site-packages/object_detection/utils/label_map_util.py", "w") as w:
  w.write(text)