# FOR MAC OS
# with open("/usr/local/lib/python3.10/site-packages/object_detection/utils/label_map_util.py") as r:
#   text = r.read().replace("tf.gfile.GFile", "tf.io.gfile.GFile")
# with open("/usr/local/lib/python3.10/site-packages/object_detection/utils/label_map_util.py", "w") as w:
#   w.write(text)


 # FOR CONTAINERS
with open("/usr/local/lib/python3.8/site-packages/object_detection/utils/label_map_util.py") as r:
  text = r.read().replace("tf.gfile.GFile", "tf.io.gfile.GFile")
with open("/usr/local/lib/python3.8/site-packages/object_detection/utils/label_map_util.py", "w") as w:
  w.write(text)