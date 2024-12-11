import cv2
from ultralytics import YOLO

model = YOLO('Model_IV.pt')
print(model.names)
webcamera = cv2.VideoCapture(0)

while True:
    success, frame = webcamera.read()
    
    results = model.track(frame, conf=0.2, imgsz=480)
    cv2.imshow("Live Camera", results[0].plot())

    if cv2.waitKey(1) == ord('q'):
        break

webcamera.release()
cv2.destroyAllWindows()
