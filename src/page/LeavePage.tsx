import { FC } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faPaperPlane } from "@fortawesome/free-solid-svg-icons";


const LeavePage:FC = () => {
    return (<>
    <div className="flex flex-col lg:flex-row  w-screen justify-center gap-5 ">
        <div className="flex flex-col shadow-lg border border-[#27374D]  rounded-md p-2 px-6 m-auto gap-5  sm:w-1/1 lg:w-1/3 xl:w-1/3 2xl:w-1/4 2xl:text-lg ">
            <label htmlFor="" className="text-center text-2xl font-bold">ข้อมูลนักศึกษา</label>
            <div className="">
            <label htmlFor="studenID">รหัสนักศึกษา :</label>
            <input type="text" id="studenID" placeholder="รหัสนักศึกษา" className="input-LeavePage" />
            </div>
            <div className="">
            <label htmlFor="name">ชื่อ - สกุล :</label>
            <input type="text" id="name" placeholder="ชื่อ-นามสกุล" className="input-LeavePage" />
            </div>
            <div className="">
            <label htmlFor="class">ชั้นปี :</label>
            <input type="text" id="class" placeholder="ชั้นปี" className="input-LeavePage" />
            </div>
            <div className="">
            <label htmlFor="group">หมู่เรียน :</label>
            <input type="text" id="group" placeholder="หมู่เรียน" className="input-LeavePage" />
            </div>
            <div className="">
            <label htmlFor="consultant">ที่ปรึกษา :</label>
            <input type="text" id="consultant" placeholder="ที่ปรึกษา" className="input-LeavePage" />
            </div>
            <div className="">
            <label htmlFor="phnumber">เบอร์โทรศัพท์ :</label>
            <input type="text" id="phnumber" placeholder="เบอร์โทรศัพท์" className="input-LeavePage" />
            </div>
            <div className="justify-center flex"><button className="btn"><FontAwesomeIcon icon={faFloppyDisk} /> บันทึก</button></div>
        </div>
        <div className="flex flex-col shadow-lg border border-[#27374D]  rounded-md p-2 px-6 m-auto gap-5  sm:w-1/1 lg:w-1/2 xl:w-3/6 2xl:w-2/5 2xl:text-lg">
        <label htmlFor="" className="text-center text-2xl font-bold">แบบฟอร์มการลา</label>
            <div className="flex flex-col xl:flex-row gap-5">
            <div className="flex gap-1">
                <label htmlFor="">ประเภท :</label>
                <select id="typeLeave"
                    className="float-right input-LeavePage "
                >
                        <option value="business">ลากิจ</option>
                        <option value="sick">ลาป่วย</option>
                        <option value="maternity">ลาคลอด</option>
                        <option value="military-rvice">ลาเข้ารับตรวจเลือกทหาร</option>
                        <option value="religious-ceremony">ลาประกอบพิธีทางศาสนา</option>             
                </select>
            </div>
            <div className="flex gap-1">
                <label htmlFor="emgNumber">เบอร์โทรฉุกเฉิน :</label>
                <input type="text" id="emgNumber" placeholder="เบอร์โทรฉุกเฉิน" className="input-LeavePage" />
            </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5"> 
                <div className="flex gap-1">
                <label htmlFor="">เริ่มวันที่ :</label>
                <input type="date" name="" id="" className="float-right input-LeavePage " />
                </div>
                <div className="flex gap-1">
            <label htmlFor="">ถึงวันที่ :</label>
            <input type="date" name="" id="" className="float-right input-LeavePage " />
            </div>
            </div>
            <div className="flex gap-2">
            <label htmlFor="detailLeave">รายละเอียด :</label>
               <textarea name="" id="" className="float-right input-LeavePage  w-2/3"></textarea>
            </div>
            <div className="">
            <label htmlFor="">หลักฐาน</label>
            </div>

            <div>
                <div className='flex flex-row gap-2'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">ข้าพเจ้าสัญญาว่าจะติดตามงานในคาบเรียน และดำเนินการเองให้เรียบร้อยตามกำหนดเวลา</label>
                </div>
                <div className='flex gap-2'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">ข้าพเจ้าขอรับรองว่าเป็นความจริงทุกประการ</label>
                </div>
            </div>

            <div className="justify-center flex"><button className="btn"><FontAwesomeIcon icon={faPaperPlane} /> ส่งแบบฟอร์ม</button></div>
        </div>
    </div>
    </>)
}
export {LeavePage};