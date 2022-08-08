/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import FormikTest from './FormikTest';
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

function App() {
  const navigation = useNavigate();

  const handleMoveFormik = () => {
    navigation('/formik-test')
  }
  return (
      <Root>
        <HeaderArea onClick={handleMoveFormik}>
          직원 추가 테스트
        </HeaderArea>
        <MainArea>
          <Routes>
            <Route
                path={`/formik-test`}
                element={<FormikTest />}
            />
          </Routes>
        </MainArea>
      </Root>
  );
}

const Root = styled.div`
    font-size: 14px;
`;

const HeaderArea = styled.div`
    width: 100%;
    position: fixed;
    height: 50px;
    padding: 10px 15px;
    top: 0;
    left: 0;
    text-decoration: underline;
    cursor: pointer;
    background-color: #ffffff;
    border-bottom: 1px solid #eaeaea;
`;

const MainArea= styled.div`
    width: 100%;
    margin-top: 60px;
    min-height: calc(100vh - 60px);
    padding: 30px;
`;

export default App;
