import styled from "styled-components";

export const IndecatorWrapper = styled.div`
overflow: hidden;

.i-content{
	display: flex;
	position: relative;  //offsetLeft 要定位才能拿到
	transition: transform 250ms ease;
	> * {
	flex-shrink: 0; // 直接子元素 不要压缩
	}
}
`