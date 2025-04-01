import './NavBtn.scss';
export default ({ text, activeTab }) => {return (
    <button className={`NavBtn ${
        activeTab === 1 ? "NavBtn_1" :
        activeTab === 2 ? "NavBtn_2" :
        activeTab === 3 ? "NavBtn_3" :
        activeTab === 4 ? "NavBtn_4" : ""
    }`}>
        {text}
    </button>
)}