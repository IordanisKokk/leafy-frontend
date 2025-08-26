// src/components/PlantCard.tsx
import React from "react";
import {
    Card,
    CardMedia,
    CardContent,
    CardHeader,
    CardActionArea,
    Typography,
    Divider,
    Chip,
    Box,
    Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
    Image as ImageIcon,
    SunMedium,
    Droplet,
    Thermometer,
    ShieldAlert,
    MapPin,
    TrendingUp,
} from "lucide-react";

/* ───── Types ───── */
export interface Plant {
    id: string;
    commonName: string;
    scientificName: string;
    description: string;
    imageUrl?: string;
    properties: {
        growthRate?: string;
        nativeRegion?: string;
        isToxicToPets?: boolean;
    };
    careInstructions: {
        humidity?: string;
        light?: string;
        temperatureC?: string;
    };
}

/* ───── Styled shells ───── */
const Frame = styled(Card)(({ theme }) => ({
    borderRadius: 20,
    background: "#f0f9f0", // Very pastel light green
    padding: 2,
    height: 480, // Fixed height for all cards
    display: "flex",
    flexDirection: "column",
    transition: "transform .2s ease, box-shadow .2s ease",
    "&:hover": {
        transform: "translateY(-6px)",
        boxShadow: theme.shadows[6],
    },
}));

const InnerCard = styled(Card)({
    borderRadius: 16,
    height: "100%",
    display: "flex",
    flexDirection: "column",
});

const Placeholder = styled(Box)({
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#94a3b8",
    position: "relative",
    flexGrow: 1,
});

/* ───── Fact component (vertical, centred) ───── */
interface FactProps {
    icon: React.ReactNode;
    label: string;
    value?: string | number | boolean;
}
const Fact: React.FC<FactProps> = ({ icon, label, value }) =>
    value === undefined || value === "" ? null : (
        <Stack spacing={0.25} alignItems="center" textAlign="center">
            {icon}
            <Typography variant="caption" fontWeight={600} fontSize="0.65rem">
                {label}
            </Typography>
            <Typography variant="caption" component="div" fontSize="0.6rem">
                {String(value)}
            </Typography>
        </Stack>
    );

/* ───── Main component ───── */
export const PlantCard: React.FC<{ plant: Plant }> = ({ plant }) => {
    const {
        commonName,
        scientificName,
        description,
        imageUrl,
        properties,
        careInstructions,
    } = plant;

    return (
        <Frame elevation={0}>
            <InnerCard elevation={0}>
                <CardActionArea sx={{ borderRadius: 3, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
                    {/* Image / placeholder */}
                    {imageUrl ? (
                        <CardMedia
                            component="img"
                            image={imageUrl}
                            alt={commonName}
                            sx={{ 
                                height: 140, 
                                objectFit: "cover", 
                                flexShrink: 0,
                                width: "100%"
                            }}
                        />
                    ) : (
                        <CardMedia sx={{ height: 140, width:'100%', bgcolor: "grey.100", flexShrink: 0 }}>
                            <Placeholder>
                                <ImageIcon size={40} />
                                <Chip
                                    size="small"
                                    label="No photo"
                                    sx={{
                                        position: "absolute",
                                        bottom: 6,
                                        right: 6,
                                        bgcolor: "grey.200",
                                        color: "grey.700",
                                        fontSize: "0.65rem",
                                    }}
                                />
                            </Placeholder>
                        </CardMedia>
                    )}

                    {/* Heading */}
                    <CardHeader
                        title={<Typography variant="subtitle1" align="center" fontSize="1rem">{commonName}</Typography>}
                        subheader={
                            <Stack spacing={0.5} alignItems="center">
                                <Typography
                                    variant="caption"
                                    sx={{ fontStyle: "italic" }}
                                    align="center"
                                    fontSize="0.75rem"
                                >
                                    {scientificName}
                                </Typography>
                                {properties.isToxicToPets && (
                                    <Chip
                                        icon={<ShieldAlert size={12} />}
                                        label="Toxic"
                                        size="small"
                                        color="error"
                                        variant="outlined"
                                        sx={{ fontSize: "0.65rem" }}
                                    />
                                )}
                            </Stack>
                        }
                        sx={{ pb: 0, pt: 1 }}
                    />

                    {/* Body */}
                    <CardContent sx={{ pt: 1, pb: 1, flex: 1, display: "flex", flexDirection: "column" }}>
                        <Typography variant="body2" color="text.secondary" align="center" mb={1} fontSize="0.75rem">
                            {description}
                        </Typography>

                        <Divider sx={{ mb: 1.5 }} />

                        {/* Facts grid - Two columns with fixed height */}
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: 1.5,
                                minHeight: 120, // Reduced fixed height
                                alignItems: "start",
                                flex: 1,
                            }}
                        >
                            <Fact
                                icon={<Droplet size={14} />}
                                label="Humidity"
                                value={careInstructions.humidity}
                            />
                            <Fact
                                icon={<SunMedium size={14} />}
                                label="Light"
                                value={careInstructions.light}
                            />
                            <Fact
                                icon={<Thermometer size={14} />}
                                label="Temp"
                                value={careInstructions.temperatureC}
                            />
                            <Fact
                                icon={<TrendingUp size={14} />}
                                label="Growth"
                                value={properties.growthRate}
                            />
                            <Fact
                                icon={<MapPin size={14} />}
                                label="Origin"
                                value={properties.nativeRegion}
                            />
                        </Box>
                    </CardContent>
                </CardActionArea>
            </InnerCard>
        </Frame>
    );
};
