import React, { useContext, useEffect } from "react";
import Select from "react-select";
import getConfig from "next/config";
import { useRouter } from "next/router";

export default function LocaleSwitch({ styles }) {
	const router = useRouter();

	let selectOptions = [
		{ value: "en", label: "English" },
		{ value: "de", label: "Deutsch" },
	];

	const customStyles = {
		control: (provided, state) => ({
			...provided,
			background: "#fff",
			borderColor: "#9e9e9ec0",
			minHeight: "30px",
			height: "30px",
			boxShadow: state.isFocused ? null : null,
			fontSize: "0.7em",
		}),

		valueContainer: (provided, state) => ({
			...provided,
			height: "30px",
			padding: "0 0 0 5px",
			margin: "-2px 0 0 0",
		}),

		input: (provided, state) => ({
			...provided,
			margin: "0px",
		}),
		indicatorSeparator: (state) => ({
			display: "none",
			padding: 0,
			margin: 0,
		}),
		indicatorsContainer: (provided, state) => ({
			...provided,
			height: "30px",
			padding: "0",
		}),
		dropdownIndicator: (provided, state) => ({
			...provided,
			padding: "0",
		}),
		option: (provided, state) => ({
			...provided,
			padding: "5px",
			fontSize: "0.7em",
		}),
	};

	return (
		<div className={styles.navSelectContainer}>
			{router.locale !== null ? (
				<Select
					styles={customStyles}
					defaultValue={selectOptions.filter(
						(option) => option.value === router.locale
					)}
					onChange={(v) => {
						router.push(router.asPath, undefined, { locale: v.value });
					}}
					options={selectOptions}
					classNamePrefix="nav-select"
				/>
			) : (
				""
			)}
		</div>
	);
}
