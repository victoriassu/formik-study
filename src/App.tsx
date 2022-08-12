/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import FormikTest from './FormikTest';
import FormikTest2 from './FormikTest2';
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
  const handleMoveFormikUsingYup = () => {
    navigation('/formik-testUsingYup')
  }
  return (
      <Root>
        <HeaderArea>
            <HeaderSpanArea onClick={handleMoveFormik}>
                직원 추가 1
            </HeaderSpanArea>
            <HeaderSpanArea onClick={handleMoveFormikUsingYup}>
              직원 추가 2
            </HeaderSpanArea>
        </HeaderArea>
        <MainArea>
          <Routes>
            <Route
                path={`/formik-test`}
                element={<FormikTest />}
            />
              <Route
                  path={`/formik-testUsingYup`}
                  element={<FormikTest2 />}
              />
          </Routes>
        </MainArea>
      </Root>
  );
}

const Root = styled.div`
    font-size: 14px;
    overflow-y: hidden;
`;

const HeaderArea = styled.div`
    width: 100%;
    position: fixed;
    height: 50px;
    padding: 10px 15px;
    top: 0;
    left: 0;
    background-color: #ffffff;
    border-bottom: 1px solid #eaeaea;
`;

const HeaderSpanArea = styled.span`
    text-decoration: underline;
    cursor: pointer;
    & + & {
        margin-left: 12px;
    }
`;

const MainArea= styled.div`
    width: 100%;
    margin-top: 60px;
    height: calc(100vh - 60px);
    padding: 30px;
`;

export default App;
