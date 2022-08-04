import "../UserDetails/UserDetails.css"
export default function UserDetails(){
const user={
    firstName:"מיכל",//שם פרטי
    lastName:"כהן",//שם משפחה
    age:null,//גיל
    status:null,//מצב משפחתי
    bornDate:null,//תאריך לידה
    countryBirth:null,//ארץ לידה
    city:null,//עיר
    phone:null,//טלפון
    characters:null,//תכונות אופי
    colorSkin:null,//גוון עור
    height:null,//גובה
    bodyStracture:null,//מבנה גוף
    healthCondition:null,//מצב בריאותי
    economicCondition:null,//מצב כלכלי
    clothingStyle:null,//סגנון לבוש
    look:null,//מראה כללי
    sector:null,//מגזר
    picture:null,//תמונה
    requireMoneyOrCommit:null,//דרישות כספיות או התחייבויות
    yeshivaOrSeminar:null,//שם מקום לימודים
    doingToday:null,//עיסוק כיום
    fatherName:null,//שם האב
    motherName:null,//שם האם
    fatherDoing:null,//עיסוק אב
    motherDoing:null,//עיסוק אם
    mozaAv:null,//מוצא אב
    mozaEm:null,//מוצא אם
    siblings:null,//מס אחים ואחיות
    halachaMethod:null,//שיטה הלכתית
    drishotSector:null,//דרישות-שיוך מגזרי
    drishotLook:null,//דרישות-מראה כללי
    drishotCharacters:null,//דרישות-תכונות אופי
    drishotFavoriteMoza:null,//דרישות-ארץ מוצא מועדף
    drishotNotMoza:null,//דרישות לא ממוצאd
    drishotHeaddress:null,//דרישות-כיסוי ראש
    fromAge:null,//מגיל
    mostAge:null,//עד גיל
    fromHigh:null,//מגובה
    mostHigh:null,//עד גובה
    casherPhone:null,//טלפון כשר
    licence:null,//רישיון
    smoking:null//מעשן
}


    return(<>
    
<div className="card">
    <p>שם מלא: {user.firstName} {user.lastName}</p>
    <p>גיל:{user.age}</p>
    <p>{user.status}</p>
    <p>{user.height}</p>
    <p>{user.sector}</p>
    <p>{user.height}</p> 
    <p>{user.yeshivaOrSeminar}</p>
    <p>{user.city}</p>
    <p>{user.height}</p>
    <p>{user.height}</p>
    <p>{user.height}</p>
    <p>{user.height}</p>
    <p>{user.height}</p>
    <p>{user.height}</p>
    <p>{user.height}</p>
    <p>{user.height}</p>
    <p>{user.height}</p>
    <p>{user.height}</p>
    <p>{user.height}</p>
    <p>{user.height}</p>
    <p>{user.height}</p>
    <p>{user.height}</p>
    <p>{user.height}</p>
    <p>{user.height}</p>
    <p>{user.height}</p>
    <p>{user.height}</p>
    <p>{user.height}</p>
    <p>{user.height}</p>
    <p>{user.height}</p>
    <p>{user.height}</p>
    <p>{user.height}</p>

</div>
    </>)
}
