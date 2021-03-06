# การเริ่มต้นใช้งาน
รันคำสั่งต่อไปนี้เพื่อทำการ Build และเปิด Container
```
$ docker-compose -f "docker-compose.yaml" up -d --build
```
จากนั้นจะสามารถเข้าใช้งานเว็บแอพพลิกเคชันได้ที่ http://localhost:3000


# รายงาน
## ระบบสมาร์ทฟาร์มขนาดเล็ก


จัดทำโดย


1. นายวีรวิชญ์  พิชิตวงศ์ศรี	รหัส    603040109-0

2. นางสาวสุธิมา วิเชียรทวี	รหัส    613040412-0

3. นายกิตติพัฒน์ แดงดี		รหัส    613040438-2

4. นางสาวสุพัชรี ไชยยา		รหัส    613040582-5


เสนอ

1. ผศ. ดร. ชัชชัย คุณบัว
                                    
รายงานนี้เป็นส่วนหนึ่งของรายวิชา EN814774 หัวข้อพิเศษทางคอมพิวเตอร์ซอฟต์แวร์
สาขาวิชาวิศวกรรมคอมพิวเตอร์ คณะวิศกรรมศาสตร์ มหาวิทยาลัยขอนแก่น

ภาคการศึกษาปลาย ปีการศึกษา 2564


---


## ผลการดำเนินงาน

### 2.1 ระบบสมาร์ทฟาร์มขนาดเล็ก
องค์ประกอบบนระบบสมาร์ทฟาร์มขนาดเล็ก เมื่อทำการเปิดเว็บแอปพลิเคชันระบบสมาร์ทฟาร์มขนาดเล็กจะพบเมนูดังนี้
1.	เมนูอุปกรณ์
2.	สมาชิก
3.	คู่มือการใช้งาน	


### 2.2.  เมนูอุปกรณ์
แสดงรายการของอุปกรณ์ ซึ่งเริ่มต้นจะมี 4 อุปกรณ์ 
ในแต่ละอุปกรณ์จะมี Dashboard แสดงข้อมูลต่างๆ ได้แก่ ข้อมูลค่าอุณหภูมิ, ความชื้น, ความชื้นดิน และความเร็วลม ของอุปกรณ์นั้นๆ
มีฟังก์ชันการทำงาน ได้แก่ เพิ่มอุปกรณ์, แก้ไขอุปกรณ์ และลบอุปกรณ์
สามารถเลือก Mode การทำงานได้เป็นแบบ Auto/Manual 
แต่ละอุปกรณ์ จะสามารถสั่งเปิด/ปิด Relay ได้  4 ตัว
แสดงผลการตั้งค่าการทำงานอัตโนมัติ ได้แก่ ทำงานอัตโนมัติรายสัปดาห์                          และทำงานอัตโนมัติแบบเซ็นเซอร์
มีฟังก์ชันการทำงานอัตโนมัติของอุปกรณ์ ได้แก่ เพิ่มการทำงานอัตโนมัติ,                       แก้ไขการทำงานอัตโนมัติ และลบการทำงานอัตโนมัติ
แสดงผล Transaction ของเวลาในรูปแบบกราฟแท่ง ซึ่งมีข้อมูลค่าอุณหภูมิ, ความชื้น, ความชื้นดิน และความเร็วลม

หากทำการเลือก mode เป็นแบบ Auto จะสามารถทำการเพิ่มเงื่อนไขการทำงานอัตโนมัติได้ ซึ่งการเปิด/ปิดสวิตซ์ Relay จะถูกตั้งแต่ให้ทำงานเป็นแบบ Auto ไม่สามารถตั้งค่าได้
แต่หากทำเลือก mode เป็นแบบ Manual จะทำตั้งค่าการเปิด/ปิดสวิตซ์ Relay ได้ ซึ่งการเพิ่มเงื่อนไขการทำงานอัตโนมัติจะถูกตั้งแต่ให้ทำงานเป็นแบบ Auto ไม่สามารถตั้งค่าได้
โดยค่าที่ถูกตั้งเป็นค่าเริ่มต้นจะเป็นแบบ Manual

แสดงผล Transaction ของเวลาในรูปแบบกราฟแท่ง
กราฟแสดงผลของ Transaction จะเป็นกราฟแท่งที่ตรวจจับและทำการบันทึก Transaction จากการทำงานที่ถูกตั้งค่าไว้ทั้ง Auto หรือ Manual ของแต่ละอุปกรณ์
โดยจะมีค่าที่แสดง ได้แก่ ข้อมูลค่าอุณหภูมิ, ค่าความชื้น, ค่าความชื้นดิน และค่าความเร็วลม ของแต่ละอุปกรณ์

### 2.3 เมนูสมาชิก
หน้าสมาชิกเป็นการแสดงข้อมูลผู้จัดทำโครงงานนี้ โดยมีข้อมูล ชื่อ รหัสนักศึกษามหาวิทยาลัยขอนแก่น  อีเมล และโซเชียลมีเดียต่างๆ สำหรับการติดต่อ

### 2.4 เมนูคู่มือการใช้งาน

หน้าคู่มือการใช้งานเป็นหน้าแสดงรายละเอียดการใช้งานของเว็บแอปพลิเคชันระบบสมาร์ทฟาร์มขนาดเล็ก

### 2.5 API เชื่อมต่อระหว่าง โมดูล และระบบฐานข้อมูล
- API เชื่อมต่อระหว่าง module และระบบฐานข้อมูล ของ device
- API เชื่อมต่อระหว่าง module และระบบฐานข้อมูล ของ transaction แต่ละตัว
- API เชื่อมต่อระหว่าง module และระบบฐานข้อมูล ของ schedule แต่ละตัว

### 2.6 แสดง database table ข้อมูล
มีทั้งหมด 3 Table
- devices
- transactions
- schedule
### 2.7 สามารถจัดเก็บข้อมูลไปยัง database แบบ Persistent data 	
- จากตารางข้อมูลเดิมจะมีข้อมูลเดิมแสดงอยู่ ขณะที่ยังเปิดการใช้งาน Service database อยู่
- ทำการเพิ่มอุปกรณ์ 
- จะมี Device 6 เพิ่มเข้ามาใน Database
- ทำการปิด Service Database เพื่อทดสอบว่าดาต้าที่เพิ่มเข้ามาจะไม่หายไป
- ทำการเปิด Service Database และเชื่อมต่อกับฐานข้อมูลใหม่อีกครั้ง
- จะพบว่าข้อมูลยังอยู่แม้เราปิด Database เปิดใหม่


