import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
	display: flex;
	margin-top: 10px;
	.info{
		cursor: pointer;
		font-size: 17px;
		font-weight: 700;
		color:${props=>props.color};
		
		&:hover {
      text-decoration: underline;
    }

    .text {
      margin-right: 6px;
    }
	}
`