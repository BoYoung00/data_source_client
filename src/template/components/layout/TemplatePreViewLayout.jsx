import cardStyles from '../../styleModule/cardDesignStyle.module.css'
import barStyles from '../../styleModule/barDesignStyle.module.css'
export default function TemplatePreViewLayout({ templateName  , selectInputData , checkBoxData , tableID}) {
    let templateDesign = null;


    switch (templateName.toUpperCase()) {
        case "CARD TEMPLATE": {
            templateDesign = (
                <div className={cardStyles.cardContainer}>
                    {selectInputData.map((card, index) => (
                        <div key={index} className={cardStyles.card}>
                            <div className={cardStyles.cardImageContainer}>
                                <img src={card.image} alt={card.title} />
                            </div>
                            <div className={cardStyles.cardContent}>
                                <h2 className={cardStyles.cardTitle}>{card.title}</h2>
                                <p className={cardStyles.cardDescription}>{card.description}</p>
                            </div>
                            <div className={cardStyles.cardButtonContainer}>
                                <button className={cardStyles.cardButton}>버튼</button>
                            </div>
                        </div>
                    ))}
                </div>
            );
            break;
        }
        case "BAR TEMPLATE": {
            // Bar Template에 대한 처리
            templateDesign = (
                <div>
                    {selectInputData.map((bar, index) => (
                        <div key={index} className={barStyles.bar}>
                            <div className={barStyles.barImage}>
                                <img src={bar.image} alt={bar.title} />
                            </div>
                            <div className={barStyles.barContainer}>
                                <h2 className={barStyles.barTitle}>{bar.title}</h2>
                                <p className={barStyles.barDescription}>{bar.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            );
            break;
        }
        case "LIST TEMPLATE": {
            // List Template에 대한 처리
            templateDesign = (
                <div>
                    {/* List Template의 디자인 */}
                    <h2>List Template Design</h2>
                    {/* 추가적인 UI 요소들 */}
                </div>
            );
            break;
        }
        case "TREE TEMPLATE": {
            // Tree Template에 대한 처리
            templateDesign = (
                <div>
                    {/* Tree Template의 디자인 */}
                    <h2>Tree Template Design</h2>
                    {/* 추가적인 UI 요소들 */}
                </div>
            );
            break;
        }
        case "TABLE TEMPLATE": {
            // Table Template에 대한 처리
            templateDesign = (
                <div>
                    {/* Table Template의 디자인 */}
                    <h2>Table Template Design</h2>
                    {/* 추가적인 UI 요소들 */}
                </div>
            );
            break;
        }
        default: {
            // 해당하는 템플릿이 없는 경우의 처리
            templateDesign = (
                <div>
                    <h2>Template Not Found</h2>
                    <p>해당하는 템플릿이 없습니다.</p>
                </div>
            );
            break;
        }
    }


    return (
        <div>
            {templateDesign}
        </div>
    );
}
