/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Works } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
}) {
  const { tokens } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      (currentFieldValue !== undefined ||
        currentFieldValue !== null ||
        currentFieldValue !== "") &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  return (
    <React.Fragment>
      {isEditing && children}
      {!isEditing ? (
        <>
          <Text>{label}</Text>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            color={tokens.colors.brand.primary[80]}
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
}
export default function WorksUpdateForm(props) {
  const {
    id,
    works,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    inventar: undefined,
    name: undefined,
    artist: undefined,
    category: undefined,
    tags: [],
    subject: [],
    description: undefined,
    categorie: undefined,
  };
  const [inventar, setInventar] = React.useState(initialValues.inventar);
  const [name, setName] = React.useState(initialValues.name);
  const [artist, setArtist] = React.useState(initialValues.artist);
  const [category, setCategory] = React.useState(initialValues.category);
  const [tags, setTags] = React.useState(initialValues.tags);
  const [subject, setSubject] = React.useState(initialValues.subject);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [categorie, setCategorie] = React.useState(initialValues.categorie);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...worksRecord };
    setInventar(cleanValues.inventar);
    setName(cleanValues.name);
    setArtist(cleanValues.artist);
    setCategory(cleanValues.category);
    setTags(cleanValues.tags ?? []);
    setCurrentTagsValue(undefined);
    setSubject(cleanValues.subject ?? []);
    setCurrentSubjectValue(undefined);
    setDescription(cleanValues.description);
    setCategorie(cleanValues.categorie);
    setErrors({});
  };
  const [worksRecord, setWorksRecord] = React.useState(works);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Works, id) : works;
      setWorksRecord(record);
    };
    queryData();
  }, [id, works]);
  React.useEffect(resetStateValues, [worksRecord]);
  const [currentTagsValue, setCurrentTagsValue] = React.useState(undefined);
  const tagsRef = React.createRef();
  const [currentSubjectValue, setCurrentSubjectValue] =
    React.useState(undefined);
  const subjectRef = React.createRef();
  const validations = {
    inventar: [],
    name: [],
    artist: [],
    category: [],
    tags: [],
    subject: [],
    description: [],
    categorie: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          inventar,
          name,
          artist,
          category,
          tags,
          subject,
          description,
          categorie,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            Works.copyOf(worksRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "WorksUpdateForm")}
    >
      <TextField
        label="Inventar"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={inventar}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              inventar: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              inventar: value,
              name,
              artist,
              category,
              tags,
              subject,
              description,
              categorie,
            };
            const result = onChange(modelFields);
            value = result?.inventar ?? value;
          }
          if (errors.inventar?.hasError) {
            runValidationTasks("inventar", value);
          }
          setInventar(value);
        }}
        onBlur={() => runValidationTasks("inventar", inventar)}
        errorMessage={errors.inventar?.errorMessage}
        hasError={errors.inventar?.hasError}
        {...getOverrideProps(overrides, "inventar")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              inventar,
              name: value,
              artist,
              category,
              tags,
              subject,
              description,
              categorie,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Artist"
        isRequired={false}
        isReadOnly={false}
        defaultValue={artist}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              inventar,
              name,
              artist: value,
              category,
              tags,
              subject,
              description,
              categorie,
            };
            const result = onChange(modelFields);
            value = result?.artist ?? value;
          }
          if (errors.artist?.hasError) {
            runValidationTasks("artist", value);
          }
          setArtist(value);
        }}
        onBlur={() => runValidationTasks("artist", artist)}
        errorMessage={errors.artist?.errorMessage}
        hasError={errors.artist?.hasError}
        {...getOverrideProps(overrides, "artist")}
      ></TextField>
      <TextField
        label="Category"
        isRequired={false}
        isReadOnly={false}
        defaultValue={category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              inventar,
              name,
              artist,
              category: value,
              tags,
              subject,
              description,
              categorie,
            };
            const result = onChange(modelFields);
            value = result?.category ?? value;
          }
          if (errors.category?.hasError) {
            runValidationTasks("category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("category", category)}
        errorMessage={errors.category?.errorMessage}
        hasError={errors.category?.hasError}
        {...getOverrideProps(overrides, "category")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              inventar,
              name,
              artist,
              category,
              tags: values,
              subject,
              description,
              categorie,
            };
            const result = onChange(modelFields);
            values = result?.tags ?? values;
          }
          setTags(values);
          setCurrentTagsValue(undefined);
        }}
        currentFieldValue={currentTagsValue}
        label={"Tags"}
        items={tags}
        hasError={errors.tags?.hasError}
        setFieldValue={setCurrentTagsValue}
        inputFieldRef={tagsRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Tags"
          isRequired={false}
          isReadOnly={false}
          value={currentTagsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.tags?.hasError) {
              runValidationTasks("tags", value);
            }
            setCurrentTagsValue(value);
          }}
          onBlur={() => runValidationTasks("tags", currentTagsValue)}
          errorMessage={errors.tags?.errorMessage}
          hasError={errors.tags?.hasError}
          ref={tagsRef}
          {...getOverrideProps(overrides, "tags")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              inventar,
              name,
              artist,
              category,
              tags,
              subject: values,
              description,
              categorie,
            };
            const result = onChange(modelFields);
            values = result?.subject ?? values;
          }
          setSubject(values);
          setCurrentSubjectValue(undefined);
        }}
        currentFieldValue={currentSubjectValue}
        label={"Subject"}
        items={subject}
        hasError={errors.subject?.hasError}
        setFieldValue={setCurrentSubjectValue}
        inputFieldRef={subjectRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Subject"
          isRequired={false}
          isReadOnly={false}
          value={currentSubjectValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.subject?.hasError) {
              runValidationTasks("subject", value);
            }
            setCurrentSubjectValue(value);
          }}
          onBlur={() => runValidationTasks("subject", currentSubjectValue)}
          errorMessage={errors.subject?.errorMessage}
          hasError={errors.subject?.hasError}
          ref={subjectRef}
          {...getOverrideProps(overrides, "subject")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        defaultValue={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              inventar,
              name,
              artist,
              category,
              tags,
              subject,
              description: value,
              categorie,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Categorie"
        isRequired={false}
        isReadOnly={false}
        defaultValue={categorie}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              inventar,
              name,
              artist,
              category,
              tags,
              subject,
              description,
              categorie: value,
            };
            const result = onChange(modelFields);
            value = result?.categorie ?? value;
          }
          if (errors.categorie?.hasError) {
            runValidationTasks("categorie", value);
          }
          setCategorie(value);
        }}
        onBlur={() => runValidationTasks("categorie", categorie)}
        errorMessage={errors.categorie?.errorMessage}
        hasError={errors.categorie?.hasError}
        {...getOverrideProps(overrides, "categorie")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
