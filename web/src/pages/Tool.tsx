import { Option, Select } from "@mui/joy";
import { useState } from "react";
import Icon from "@/components/Icon";
import MobileHeader from "@/components/MobileHeader";
import Base64 from "@/components/Tools/Base64";
import JsonFormat from "@/components/Tools/Json";
import Jwt from "@/components/Tools/Jwt";
import Md5 from "@/components/Tools/Md5";
import Time from "@/components/Tools/Time";
import UUID from "@/components/Tools/Uuid";
import { useUserStore } from "@/store/module";
import { useTranslate } from "@/utils/i18n";
import "@/less/setting.less";

type SettingSection = "jwt" | "json" | "md5" | "time" | "uuid" | "base64" | "sso";

interface State {
  selectedSection: SettingSection;
}

const Tool = () => {
  const t = useTranslate();
  const userStore = useUserStore();
  const user = userStore.state.user;
  const [state, setState] = useState<State>({
    selectedSection: "jwt",
  });
  const isHost = user?.role === "HOST";

  const handleSectionSelectorItemClick = (settingSection: SettingSection) => {
    setState({
      selectedSection: settingSection,
    });
  };

  const getSettingSectionList = () => {
    let settingList: SettingSection[] = ["jwt", "json", "md5"];
    if (isHost) {
      settingList = settingList.concat(["time", "uuid", "base64", "sso"]);
    }
    return settingList;
  };

  return (
    <section className="w-full min-h-full flex flex-col md:flex-row justify-start items-start px-4 sm:px-2 sm:pt-4 pb-8 bg-zinc-100 dark:bg-zinc-800">
      <MobileHeader showSearch={false} />
      <div className="setting-page-wrapper">
        <div className="section-selector-container">
          <span className="section-title">{t("common.basic")}</span>
          <div className="section-items-container">
            <span
              onClick={() => handleSectionSelectorItemClick("jwt")}
              className={`section-item ${state.selectedSection === "jwt" ? "selected" : ""}`}
            >
              <Icon.FileText className="w-4 h-auto mr-2 opacity-80" /> {t("setting.jwt")}
            </span>
            <span
              onClick={() => handleSectionSelectorItemClick("json")}
              className={`section-item ${state.selectedSection === "json" ? "selected" : ""}`}
            >
              <Icon.FileJson className="w-4 h-auto mr-2 opacity-80" /> {t("setting.json")}
            </span>
            <span
              onClick={() => handleSectionSelectorItemClick("base64")}
              className={`section-item ${state.selectedSection === "base64" ? "selected" : ""}`}
            >
              <Icon.Cog className="w-4 h-auto mr-2 opacity-80" /> {t("setting.base64")}
            </span>
          </div>
          {isHost ? (
            <>
              <span className="section-title">{t("setting.create")}</span>
              <div className="section-items-container">
                <span
                  onClick={() => handleSectionSelectorItemClick("md5")}
                  className={`section-item ${state.selectedSection === "md5" ? "selected" : ""}`}
                >
                  <Icon.Cog className="w-4 h-auto mr-2 opacity-80" /> {t("setting.md5")}
                </span>
                <span
                  onClick={() => handleSectionSelectorItemClick("time")}
                  className={`section-item ${state.selectedSection === "time" ? "selected" : ""}`}
                >
                  <Icon.Cog className="w-4 h-auto mr-2 opacity-80" /> {t("setting.time")}
                </span>
                <span
                  onClick={() => handleSectionSelectorItemClick("uuid")}
                  className={`section-item ${state.selectedSection === "uuid" ? "selected" : ""}`}
                >
                  <Icon.Cog className="w-4 h-auto mr-2 opacity-80" /> {t("setting.uuid")}
                </span>
              </div>
            </>
          ) : null}
        </div>
        <div className="section-content-container">
          <Select
            className="block mb-2 sm:!hidden"
            value={state.selectedSection}
            onChange={(_, value) => handleSectionSelectorItemClick(value as SettingSection)}
          >
            {getSettingSectionList().map((settingSection) => (
              <Option key={settingSection} value={settingSection}>
                {t(`setting.${settingSection}`)}
              </Option>
            ))}
          </Select>
          {state.selectedSection === "json" ? (
            <JsonFormat />
          ) : state.selectedSection === "md5" ? (
            <Md5 />
          ) : state.selectedSection === "jwt" ? (
            <Jwt />
          ) : state.selectedSection === "time" ? (
            <Time />
          ) : state.selectedSection === "uuid" ? (
            <UUID />
          ) : state.selectedSection === "base64" ? (
            <Base64 />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Tool;
