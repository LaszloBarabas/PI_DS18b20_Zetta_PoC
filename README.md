# PI_DS18b20_Zetta_PoC
Proof of concept to use ds18b20 temperature sensor on pi with zetta framework. 

Configuration ( to be able PI to work with the ds18b20 ) sensor: 

1. Load modules 
  ```
  sudo modprobe wire 
  sudo modprobe w1-gpio 
  sudo modprobe w1_therm
  ```

2. Edit /boot/config.txt
  ```
  dtoverlay=w1-gpio
  ```
3. Finally reboot the Raspberry Pi:

To see a list of the devices currently connected to  Raspberry Pi

  ```
  ls -l /sys/bus/w1/devices/
  ```

Open the sensor file and view the temperature reading:

  ```
  cat /sys/bus/w1/devices/28-00000283c6cd/w1_slave
  ```
