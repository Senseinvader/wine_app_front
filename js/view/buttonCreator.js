export default class ButtonCreator {

    getButton(name, action, view) {
        let naviButtonDiv = document.createElement('div');
        naviButtonDiv.innerText = name;
        naviButtonDiv.setAttribute('class', 'navi-button');
        naviButtonDiv.addEventListener('click', action);

        return naviButtonDiv;
    }
}