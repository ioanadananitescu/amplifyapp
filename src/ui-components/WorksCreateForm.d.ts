/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WorksCreateFormInputValues = {
    inventar?: number;
    name?: string;
    artist?: string;
    Field0?: string;
    tags?: string[];
    subject?: string[];
    description?: string;
    categorie?: string;
};
export declare type WorksCreateFormValidationValues = {
    inventar?: ValidationFunction<number>;
    name?: ValidationFunction<string>;
    artist?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
    tags?: ValidationFunction<string>;
    subject?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    categorie?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorksCreateFormOverridesProps = {
    WorksCreateFormGrid?: FormProps<GridProps>;
    inventar?: FormProps<TextFieldProps>;
    name?: FormProps<TextFieldProps>;
    artist?: FormProps<TextFieldProps>;
    Field0?: FormProps<SelectFieldProps>;
    tags?: FormProps<TextFieldProps>;
    subject?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    categorie?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WorksCreateFormProps = React.PropsWithChildren<{
    overrides?: WorksCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WorksCreateFormInputValues) => WorksCreateFormInputValues;
    onSuccess?: (fields: WorksCreateFormInputValues) => void;
    onError?: (fields: WorksCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: WorksCreateFormInputValues) => WorksCreateFormInputValues;
    onValidate?: WorksCreateFormValidationValues;
} & React.CSSProperties>;
export default function WorksCreateForm(props: WorksCreateFormProps): React.ReactElement;
