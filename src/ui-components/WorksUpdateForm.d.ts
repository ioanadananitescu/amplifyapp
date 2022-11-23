/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Works } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WorksUpdateFormInputValues = {
    inventar?: number;
    name?: string;
    artist?: string;
    category?: string;
    tags?: string[];
    subject?: string[];
    description?: string;
    categorie?: string;
};
export declare type WorksUpdateFormValidationValues = {
    inventar?: ValidationFunction<number>;
    name?: ValidationFunction<string>;
    artist?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    tags?: ValidationFunction<string>;
    subject?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    categorie?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorksUpdateFormOverridesProps = {
    WorksUpdateFormGrid?: FormProps<GridProps>;
    inventar?: FormProps<TextFieldProps>;
    name?: FormProps<TextFieldProps>;
    artist?: FormProps<TextFieldProps>;
    category?: FormProps<TextFieldProps>;
    tags?: FormProps<TextFieldProps>;
    subject?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    categorie?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WorksUpdateFormProps = React.PropsWithChildren<{
    overrides?: WorksUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    works?: Works;
    onSubmit?: (fields: WorksUpdateFormInputValues) => WorksUpdateFormInputValues;
    onSuccess?: (fields: WorksUpdateFormInputValues) => void;
    onError?: (fields: WorksUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: WorksUpdateFormInputValues) => WorksUpdateFormInputValues;
    onValidate?: WorksUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WorksUpdateForm(props: WorksUpdateFormProps): React.ReactElement;
