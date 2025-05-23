import styled from 'styled-components'

const HeaderStyle = styled.div`

.headerContainer {
    text-align: center;
    margin-bottom: 30px;
}

.headerContainer>h3 {
    text-align: left;
}

.headerTitle {
    background-color: #c6f0d7;
    padding: 8px;
}

.btnSelect {
    background: none;
    border: none;
    color: #558b62;
    font-size: 15px;
    cursor: pointer;
    padding: 0;
    margin-right: 18px;
}

.btnSelect:hover {
    color: #1e7e34;
    text-decoration: none;
    font-weight: bold;
}

.headerContainer {
    text-align: center;
    margin-bottom: 30px;
}

.headerTitle {
    background-color: #c6f0d7;
    padding: 8px;
}

.headerButton {
    font-weight: bold;
    color: #558b62;
}
`

export default HeaderStyle;