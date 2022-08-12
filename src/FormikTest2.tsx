/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import * as Yup from "yup";

interface UserValues {
    userName: string;
    phone: string;
    snId: string;
    gender: string;
    empId? : number;
}

const ValidationSchema = Yup.object().shape({
    userName : Yup.string()
        .max(70, '이름은 70자로 제한됩니다.')
        .required(),
    phone : Yup.string()
        .min(2, '2자 이상 입력해야 합니다.')
        .max(20, '20자로 제한됩니다.')
        .required()
});

const FormikTest2 = () => {
    return <>
        <Formik
            initialValues={{
                userName: '',
                phone: '',
                snId: '',
                gender: '',
            }}
            validationSchema={ValidationSchema}
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
                            <div>Error 처리 1 : {errors.userName}</div>
                        ) : null}
                        <ErrorMessage name="userName">{msg => <div>Error 처리 2 : {msg}</div>}</ErrorMessage>
                    </div>
                    <SpaceY />
                    <div>
                        <label htmlFor="phone">휴대폰 번호<SupArea>*</SupArea></label>
                        <Field id="phone" name="phone" placeholder="휴대폰 번호를 입력하세요" />
                        {errors.phone && touched.phone ? (
                            <div>Error 처리 1 : {errors.phone}</div>
                        ) : null}
                        <ErrorMessage name="phone">{msg => <div>Error 처리 2 : {msg}</div>}</ErrorMessage>
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
export default FormikTest2;