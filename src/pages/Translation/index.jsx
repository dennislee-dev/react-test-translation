import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../../components/Navbar";
import Pannel from "../../components/Pannel";
import { sourceActions, metadataActions } from "../../store";
import { StyledContainer, StyledContent, StyledWrapper } from "./style";

function Translation() {
  const dispatch = useDispatch();

  const {
    loading,
    error,
    currentSource,
    totalCount,
  } = useSelector(state => state.source);
  const { currentMetadata } = useSelector(state => state.metadata);

  const [currentId, setCurrentId] = useState(1);

  useEffect(() => {
    dispatch(sourceActions.getAll());
  }, [dispatch]);

  useEffect(() => {
    !loading && dispatch(sourceActions.setCurrentSource(currentId));
  }, [loading, dispatch, currentId]);

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(metadataActions.setCurrentMetadata(currentId));
  }

  const currentChangeHandler = (newId) => {
    setCurrentId(newId);
  }

  const render = () => {
    if (loading) {
      return <span>Loading...</span>;
    } else if (error) {
      return <span>{error.code}: ${error.message}</span>;
    } else {
      return (
        <>
          <Navbar
            total={totalCount}
            currentId={currentId}
            currentChangeHandler={currentChangeHandler}
          />
          <StyledContainer>
            <StyledContent>
              <Pannel value={currentSource.body} onClickHandler={onClickHandler} />
            </StyledContent>
            <StyledContent>
              <Pannel value={currentMetadata.body} />
            </StyledContent>
          </StyledContainer>
        </>
      )
    }
  }

  return (
    <StyledWrapper>
      {render()}
    </StyledWrapper>
  )
}

export default Translation;