export const ListTemplateCode = ({ url }) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style> /*ToDo 디자인, 화면 위치등 본인만의 스타일대로 꾸며보세요*/
    @font-face {
        font-family: "KoPubWorld Dotum Bold";
        src: url("./font/KoPubWorld Dotum Bold.ttf");
    }
    @font-face {
        font-family: "GmarketSansTTFBold";
        src: url("./font/GmarketSansTTFBold.ttf");
    }

    #dataDisplay {
        margin-top: 3%;
        justify-content: center;
        display: flex;
        gap: 25px;
        flex-wrap: wrap;


    }

    .listContainer {
        font-family: "KoPubWorld Dotum Bold", serif;
        width: 240px;
        height: auto;
        margin: 0 auto;
        border-radius: 5px;
        box-shadow: 0px 0px 5px 2px #dedede;
        padding-bottom: 10px;
    }

    .listTitleContainer {
        height: 50px;
    }

    .listTitleBox {
        height: 32px;
        font-size: 25px;
        padding:5px 0 0 15px;
    }

    .listInformContainer {
        margin-top: 10px;
        height: auto;
        width: auto;
        margin-left: 10px;
        display: flex;
    }

    .listName{
        width: 180px;
        height:auto;
        margin-left: 10px;
        font-size: 20px;
        word-wrap: break-word;
    }

    .inputBox{
        height: 20px;
        margin-left: 5px;
        margin-top: 6px;
    }

    .listAllContainer{
        margin-top: 10px;
        padding-bottom: 15px;
        padding-top: 4px;
        width: auto;
    }
    </style>
</head>
<body>
<div id="dataDisplay"> <!--//ToDo 데이터 표시하는 부분입니다 이 코드가 있어야 화면에 나와요! 혹여나 변수명을 바꾸고 싶으면 바꿔도 되는데 dataDispaly가 쓰여있는 곳은 바꾼 변수명으로 다 바꾸셔야해요-->

</div>

<script>
    const fetchData = async () => {
        try {
            const response = await fetch(\`${url}\`, {// ToDo 괄호 안 ''에 getUrl을 넣으세요
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const responseData = await response.json();



            const dataDisplay = document.getElementById('dataDisplay');


            dataDisplay.innerHTML = '';


            const listContainer = document.createElement('div');
            listContainer.classList.add('listContainer');


            const listTitleContainer = document.createElement('div');
            listTitleContainer.classList.add('listTitleContainer');


            const listTitleBox = document.createElement('div');
            listTitleBox.classList.add('listTitleBox');
            listTitleBox.textContent = 'Check Menu';



            listContainer.appendChild(listTitleContainer);
            listTitleContainer.appendChild(listTitleBox);
            listTitleContainer.appendChild(document.createElement('hr'));
            const listAllContainer = document.createElement('div');
            listAllContainer.classList.add('listAllContainer');


            // 각 속성별로 데이터 추출
            const properties = Object.keys(responseData[0]);
            const extractedData = {};
            properties.forEach(property => {
                extractedData[property] = responseData.map(item => item[property]);
            });
            console.log(extractedData);

            // UI에 가공된 데이터 추가
            properties.forEach((property, index) => {
                const dataList = extractedData[property];

                // 각 속성별 데이터를 담을 컨테이너 생성
                const propertyContainer = document.createElement('div');
                propertyContainer.classList.add('propertyContainer');

                dataList.forEach(value => {
                    const listInformContainer = document.createElement('div');
                    listInformContainer.classList.add('listInformContainer');

                    // input 요소 생성.
                    const inputBox = document.createElement('div');
                    inputBox.classList.add('inputBox');
                    const input = document.createElement('input');
                    input.setAttribute('type', 'checkbox');
                    input.style.width = '17px';
                    input.style.height = '17px';

                    // 리스트 요소 생성 및 실제 데이터 설정
                    const listName = document.createElement('div');
                    listName.classList.add('listName');
                    listName.textContent = value;

                    listInformContainer.appendChild(inputBox);
                    inputBox.appendChild(input);
                    listInformContainer.appendChild(listName);
                    propertyContainer.appendChild(listInformContainer);
                });

                // 각 속성별 데이터를 추가한 후, 가로로 <hr> 태그 추가하여 속성 간의 구분을 줌
                listContainer.appendChild(propertyContainer);

                // 마지막 속성일 경우에만 구분선 추가
                if (index !== properties.length - 1) {
                    const hr = document.createElement('hr');
                    hr.style.margin = '5px 0'; // hr 간격 조정
                    listContainer.appendChild(hr);
                }
            });

            dataDisplay.appendChild(listContainer);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    fetchData();
</script>
</body>
</html>
    `
};
