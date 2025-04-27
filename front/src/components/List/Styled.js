import styled from 'styled-components'

const ListStyle = styled.div`

.List {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.searchInput {
    width: 100%;
    border: none;
    border-bottom: 3px solid rgb(220, 220, 220);
    padding: 15px 0px;
}

.searchInput:focus {
    outline: none;
    border-bottom: 3px solid #c6f0d7;
}

.List .todos_wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
`

export default ListStyle;