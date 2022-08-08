/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';

interface UserValues {
    userName: string;
    phone: string;
    snId: string;
    gender: string;
    empId? : number;
}
const FormikTest = () => {
    return <>
        <Formik
            initialValues={{
                userName: '',
                phone: '',
                snId: '',
                gender: '',
            }}
            onSubmit={(
                values: UserValues,
                { setSubmitting }: FormikHelpers<UserValues>
            ) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <div>
                        <label htmlFor="userName">이름 <SupArea>*</SupArea></label>
                        <Field id="userName" name="userName" placeholder="이름을 입력하세요" />
                        {errors.userName && touched.userName ? (
                            <div>{errors.userName}</div>
                        ) : null}
                        <ErrorMessage name="userName">{msg => <div>{msg}</div>}</ErrorMessage>
                    </div>
                    <SpaceY />
                    <div>
                        <label htmlFor="lastName">휴대폰 번호<SupArea>*</SupArea></label>
                        <Field id="lastName" name="lastName" placeholder="휴대폰 번호를 입력하세요" />
                    </div>
                    <SpaceY />
                    <div>
                        <label htmlFor="snId">주민등록번호</label>
                        <Field
                            id="snId"
                            name="snId"
                            placeholder="주민등록번호를 입력하세요"
                        />
                    </div>
                    <SpaceY />
                    <div>
                        <label htmlFor='gender'>성별</label>
                        <SpaceY space='5px' />
                        <div role="group" aria-labelledby="my-radio-group">
                            <label>
                                <Field type="radio" name="gender" value="male" />
                                남성
                            </label>
                            <label>
                                <Field type="radio" name="gender" value="female" />
                                여성
                            </label>
                        </div>
                    </div>
                    <SpaceY />
                    <div>
                        <label htmlFor='empId'>사번</label>
                        <Field
                            id="empId"
                            name="empId"
                            placeholder="사번을 입력하세요"
                        />
                    </div>
                    <SpaceY space='20px' />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </Form>


            )}
        </Formik>

    </>
}

const SupArea = styled.sup`
    color: #ff6666;
`;

const SpaceY = styled.div<{ space?: string }>`
     height: ${({ space }) => space ? space : '12px'};
`;
export default FormikTest;