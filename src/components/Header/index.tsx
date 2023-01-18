import { SelectionContextType } from "@/@types/contexts/selection";
import { SelectionChoicesType } from "@/@types/selection";
import SelectionContext from "@/contexts/SelectionContext";
import styles from "@/styles/Header.module.css";
import { ChangeEvent } from "react";

const Header = ({
  branches,
  academicYears,
  subjects,
}: SelectionChoicesType) => {
  const handleBranchChange = (
    branch: string,
    selectionContext: SelectionContextType | null
  ) => {
    selectionContext?.setSelection({
      ...selectionContext.selection,
      branch,
    });
  };

  const handleYearChange = (
    year: string,
    selectionContext: SelectionContextType | null
  ) => {
    selectionContext?.setSelection({
      ...selectionContext.selection,
      year,
    });
  };

  const handleSubjectChange = (
    subject: string,
    selectionContext: SelectionContextType | null
  ) => {
    selectionContext?.setSelection({
      ...selectionContext.selection,
      subject,
    });
  };

  return (
    <SelectionContext.Consumer>
      {(selectionContext) => (
        <div className={styles.container}>
          <select
            className={styles.selectPicker}
            onChange={(event: ChangeEvent<HTMLSelectElement>) =>
              handleBranchChange(event.target.value, selectionContext)
            }
          >
            {branches.map(({ label, value }, index: number) => (
              <option key={index} value={value}>
                {label}
              </option>
            ))}
          </select>
          <select
            className={styles.selectPicker}
            onChange={(event: ChangeEvent<HTMLSelectElement>) =>
              handleYearChange(event.target.value, selectionContext)
            }
          >
            {academicYears.map(({ label, value }, index: number) => (
              <option key={index} value={value}>
                {label}
              </option>
            ))}
          </select>
          <select
            className={styles.selectPicker}
            onChange={(event: ChangeEvent<HTMLSelectElement>) =>
              handleSubjectChange(event.target.value, selectionContext)
            }
          >
            {subjects.map(({ label, value }, index: number) => (
              <option key={index} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      )}
    </SelectionContext.Consumer>
  );
};

export default Header;