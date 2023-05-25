import { Text, Icon, HorizontalStack } from "@shopify/polaris";

export const ImageUploadContainer = ({ title, icon, onClick }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
            }}
        >
            <HorizontalStack gpa="1">
                <Text variant="bodyMd" as="span">
                    {title}
                </Text>
                <Icon source={icon}></Icon>
            </HorizontalStack>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "160px",
                    height: "60px",
                    border: "2px dashed #BABFC3",
                    borderRadius: "8px",
                }}
            >
                <button
                    style={{
                        padding: "4px 6px 4px 6px",
                        backgroundColor: "#E5EFFD",
                        color: "#1F5199",
                        fontSize: "12px",
                        lineHeight: "16px",
                        border: "none",
                        borderRadius: "5px",
                        cursor:'pointer'
                    }}
                    onClick={onClick}
                >
                    Select Image
                </button>
            </div>
        </div>
    );
};
