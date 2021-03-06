import * as React from 'react'
import DeviceViewerContext from '../../context/DeviceViewer/DeviceViewerContext'
import { MAX_MOBILE_WIDTH, MAX_TABLET_WIDTH, popularQuestions } from '../../constants'
import arrowIcon from '../../images/arrow.svg'
import * as Styled from './styled'

const PopularQuestions: React.FC = () => {
  const deviceWidth = React.useContext(DeviceViewerContext)
  const isMobileView = deviceWidth <= MAX_MOBILE_WIDTH
  const isTabletView = deviceWidth <= MAX_TABLET_WIDTH

  const [ collapsedAnswerIds, setCollapseAnswerId ] = React.useState<Array<number>>([])

  const getOpenAnswer = (id: number): boolean => collapsedAnswerIds.some(_id => _id === id)

  const toggleCollapse = (id: number) => {
    collapsedAnswerIds.some(_id => _id === id)
      ? setCollapseAnswerId(collapsedAnswerIds.filter(_id => _id !== id))
      : setCollapseAnswerId([...collapsedAnswerIds, id])
  }

  return (
    <Styled.Container isMobileView={isMobileView}>
      <Styled.Title isMobileView={isMobileView}>
        {!isMobileView && 'Exchange '}
        Q&A
      </Styled.Title>
      {popularQuestions.map(question =>
        <Styled.Question
          key={question.index}
          isTabletView={isTabletView}
          isMobileView={isMobileView}
          onClick={() => toggleCollapse(question.index)}
        >
          <Styled.QuestionWrapper isMobileView={isMobileView}>
            <Styled.ArrowIcon
              src={arrowIcon}
              alt='arrow'
              isOpenAnswer={getOpenAnswer(question.index)}
            />
            <Styled.QuestionTitle isMobileView={isMobileView}>
              {question.title}
            </Styled.QuestionTitle>
            <Styled.Answer
              isOpenAnswer={getOpenAnswer(question.index)}
              isMobileView={isMobileView}
            >
              {question.answer}
            </Styled.Answer>
          </Styled.QuestionWrapper>
        </Styled.Question>
      )}
    </Styled.Container>
  )
}

export default PopularQuestions
